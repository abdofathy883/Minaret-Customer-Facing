import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import intlTelInput from 'intl-tel-input';
import { ContactFormService } from '../../services/contact-form/contact-form.service';
import { ContactForm } from '../../models/contact-form/contact-form';
import { TranslatePipe } from '@ngx-translate/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';
import { SocialIconsComponent } from '../../shared/social-icons/social-icons.component';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule, CommonModule, TranslatePipe, GoogleMap, MapMarker, SocialIconsComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent implements OnDestroy, AfterViewInit {
  @ViewChild('phoneInput', { static: false }) phoneInput!: ElementRef;
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;
  isLoading: boolean = false;
  contactForm!: FormGroup;
  iti: any;
  errorMessage: string = '';
  successMessage: string = '';
  center = { "lat": 28.10284, "lng": 30.75522 };

  officeLocations = [
    { "lat": 28.10284, "lng": 30.75522 },
    { "lat": 23.595769, "lng": 58.154921 }
  ];

   // NEW: bounds and map options
  bounds!: google.maps.LatLngBoundsLiteral;
  mapOptions: google.maps.MapOptions = {
    gestureHandling: 'greedy',
    fullscreenControl: false,
    streetViewControl: false,
    mapTypeControl: false
  };



  constructor(
    private fb: FormBuilder,
    private contactFormService: ContactFormService
  ) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      companyName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      desiredService: ['', Validators.required],
      projectBrief: ['', Validators.required],
    });
    // Compute bounds so both offices are visible on load
    this.bounds = this.computeBounds(this.officeLocations);

  }
    

  // NEW: helper to compute bounds from markers
  private computeBounds(locations: { lat: number; lng: number }[]): google.maps.LatLngBoundsLiteral {
    const lats = locations.map(l => l.lat);
    const lngs = locations.map(l => l.lng);
    return {
      north: Math.max(...lats),
      south: Math.min(...lats),
      east: Math.max(...lngs),
      west: Math.min(...lngs),
    };
  }



  ngOnDestroy(): void {
    if (this.iti) {
      this.iti.destroy();
    }
  }

  ngAfterViewInit(): void {
    this.iti = intlTelInput(this.phoneInput.nativeElement, {
      initialCountry: 'eg',
      geoIpLookup: (callback) => {
        fetch('https://ipinfo.io/json?token=<d8dae8adf4e32d>')
          .then((res) => res.json())
          .then((res) => callback(res.country))
          .catch((err) => console.error(err));
      },
      // @ts-ignore
      utilsScript: 'assets/utils.js',
    });
    this.phoneInput.nativeElement.addEventListener('countrychange', () => {
      this.contactForm.patchValue({
        phone: this.iti?.getNumber(),
      });
    });

    this.bounds = this.computeBounds(this.officeLocations);
    setTimeout(() => {
      if (this.map && this.bounds) {
        this.map.fitBounds(this.bounds, 24);
      }
    })
  }


  onSubmit() {
    // if (this.contactForm.invalid) {
    //   this.isLoading = false;
    //   this.contactForm.markAllAsTouched();
    //   return;
    // }
    this.isLoading = true;

    // const formData: ContactForm = {
    //   fullName: this.contactForm.value.fullName,
    //   companyName: this.contactForm.value.companyName,
    //   email: this.contactForm.value.email,
    //   phoneNumber: this.contactForm.value.phoneNumber,
    //   desiredService: this.contactForm.value.desiredService,
    //   projectBrief: this.contactForm.value.projectBrief,
    // };

    // this.contactFormService.submitContactForm(formData).subscribe({
    //   next: () => {
    //     this.isLoading = false;
    //     this.successMessage = 'Your message has been sent successfully!';
    //     this.contactForm.reset();
    //   },
    //   error: () => {
    //     this.isLoading = false;
    //     this.errorMessage = 'There was an error sending your message. Please try again later.'; 
    //   }
    // })
  }
}
