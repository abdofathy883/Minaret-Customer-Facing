import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { ContactFormService } from '../../services/contact-form/contact-form.service';
import intlTelInput from 'intl-tel-input';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, CommonModule, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('phoneInput', { static: false }) phoneInput!: ElementRef;
  isLoading: boolean = false;
  contactForm!: FormGroup;
  showEgypt: boolean = false;
  showOman: boolean = false;
  iti: any;
  activeButton: string = '';
  errorMessage: string = '';
  successMessage: string = '';

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
    this.showEgyptMap();
    this.setActiveButton('Egypt');
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
  }

  setActiveButton(button: string) {
    this.activeButton = button;
  }

  showEgyptMap() {
    this.showEgypt = true;
    this.showOman = false;
  }

  showOmanMap() {
    this.showOman = true;
    this.showEgypt = false;
  }

  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  playCaseStudy() {
    // Implement case study video modal or redirect
    console.log('Playing case study video');
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.isLoading = false;
      this.contactForm.markAllAsTouched();
      return;
    }
    
    this.isLoading = true;

    const formData = {
      fullName: this.contactForm.value.fullName,
      companyName: this.contactForm.value.companyName,
      email: this.contactForm.value.email,
      phoneNumber: this.contactForm.value.phoneNumber,
      desiredService: this.contactForm.value.desiredService,
      projectBrief: this.contactForm.value.projectBrief,
    };

    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      this.successMessage = 'Thank you! We\'ll contact you within 24 hours to discuss your project.';
      this.contactForm.reset();
    }, 2000);
  }
}