import { Component } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-task4-b',
    templateUrl: './task4-b.component.html',
    styleUrls: ['./task4-b.component.less'],
    standalone: false
})
export class Task4BComponent {

  isVisible = false;
  imageChangedEvent: Event | null = null;
  croppedImage: string | null | undefined;
  storageKey = "croppedImage";
  savedImage: string | null = null;

  constructor(private sanitizer: DomSanitizer) {
    this.loadImageFromLocalStorage();
  }

  loadImageFromLocalStorage(){
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      this.savedImage = data;
    }
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleSave(): void {
    if (this.croppedImage) {
      localStorage.setItem(this.storageKey, this.croppedImage);
    }
    this.loadImageFromLocalStorage();
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }


  fileChangeEvent(event: Event): void {
    this.imageChangedEvent = event;
    console.log(this.imageChangedEvent);
  }

  imageCropped(event: ImageCroppedEvent) {
    if (event.base64) {
      this.croppedImage = event.base64;
    }
  }

  imageLoaded(image: LoadedImage) {
    if (image.original.size.width > 1920 || image.original.size.height > 1080){
      alert('A kép túl nagy, kérlek válassz másik képet!');
      this.imageChangedEvent = null;
    }
  }

  cropperReady() {
  }

  loadImageFailed() {
  }

}
