import { Component } from '@angular/core';
import { fadeInUp } from '../../animations';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  animations: [fadeInUp],
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  imports: [FormsModule, CommonModule]
})
export class ContactComponent {
  // Form fields
  name: string = '';
  email: string = '';
  message: string = '';
  statusMessage: string = '';

  public sendEmail(e: Event) {
    e.preventDefault();

    // Pehle check karo fields empty toh nahi hain
    if (!this.name || !this.email || !this.message) {
      this.statusMessage = "Please fill all fields! ❌";
      return;
    }

    this.statusMessage = "Sending... ⏳";

    // EmailJS Parameters (Aapko EmailJS dashboard se milenge)
    const serviceID = 'service_5xtjfvm';
    const templateID = '__ejs-test-mail-service__';
    const publicKey = 'ywR1cVWd8GoRyy71E';

    emailjs.sendForm(serviceID, templateID, e.target as HTMLFormElement, publicKey)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.statusMessage = "Message Sent Successfully! ✅";
        // Form clear kar do
        this.name = ''; this.email = ''; this.message = '';
      }, (error) => {
        console.log(error.text);
        this.statusMessage = "Failed to send message. ❌";
      });
  }
}