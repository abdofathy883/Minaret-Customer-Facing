import { Injectable } from '@angular/core';
import { ApiService } from '../global-api/api.service';
import { Observable } from 'rxjs';
import { ContactForm } from '../../models/contact-form/contact-form';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  private endpoint: string = 'contactform';
  constructor(private apiService: ApiService) { }

  submitContactForm(formData: ContactForm): Observable<boolean> {
    return this.apiService.post<boolean>(`${this.endpoint}`, formData);
  }
}
