import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { WebData } from 'src/app/interface';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({

  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  data: any;
  show = false;

  private itemDoc: AngularFirestoreDocument<WebData>;
  item: Observable<any>;
  id: string;

    @ViewChild('buttonmenu') buttonmenu: ElementRef;
    @ViewChild('home_li') homeLi: ElementRef;
    @ViewChild('servicios_li') serviciosLi: ElementRef;
    @ViewChild('about_li') aboutLi: ElementRef;
    @ViewChild('contact_li') contactLi: ElementRef;
    @ViewChild('portafolio_li') portafolioli: ElementRef;

  constructor(private afs: AngularFirestore, private router: Router, private routes: ActivatedRoute) {

    this.itemDoc = afs.doc<WebData>('webs/pruebaservicios');
    this.item = this.itemDoc.valueChanges();
   // this.cargardatos(this.data);
  }

  cargardatos(item: WebData) {
    this.itemDoc.set(item);
  }

  ngOnInit() {
    this.routes.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.itemDoc = this.afs.doc<any>(`webs/${this.id}`);
      this.item = this.itemDoc.valueChanges();
      this.item.subscribe((data) => {
        if (data === undefined || data.tipo !== 3) {
          this.router.navigateByUrl('/404');
        } else {
          this.data = data;
          // console.log(this.data);
          this.show = true;
        }
      });
    });
  }

  scrollToElement($element, activeElement: string, preventClick?: boolean): void {
    if (preventClick) {
      this.buttonmenu.nativeElement.click();
    }
    $element.scrollIntoView({behavior: 'smooth', block: 'start'});
    this.activesToogle(activeElement);
  }

  activesToogle( el: string) {
    switch (el) {
      case 'home':
        this.homeLi.nativeElement.classList.add('active');
        this.serviciosLi.nativeElement.classList.remove('active');
        this.aboutLi.nativeElement.classList.remove('active');
        this.contactLi.nativeElement.classList.remove('active');
        this.portafolioli.nativeElement.classList.remove('active');
        break;
      case 'servicios':
        this.homeLi.nativeElement.classList.remove('active');
        this.serviciosLi.nativeElement.classList.add('active');
        this.aboutLi.nativeElement.classList.remove('active');
        this.contactLi.nativeElement.classList.remove('active');
        this.portafolioli.nativeElement.classList.remove('active');
        break;
      case 'about':
        this.homeLi.nativeElement.classList.remove('active');
        this.serviciosLi.nativeElement.classList.remove('active');
        this.aboutLi.nativeElement.classList.add('active');
        this.contactLi.nativeElement.classList.remove('active');
        this.portafolioli.nativeElement.classList.remove('active');
        break;
      case 'contact':
        this.homeLi.nativeElement.classList.remove('active');
        this.serviciosLi.nativeElement.classList.remove('active');
        this.aboutLi.nativeElement.classList.remove('active');
        this.contactLi.nativeElement.classList.add('active');
        this.portafolioli.nativeElement.classList.remove('active');
        break;
        case 'portafolio':
        this.homeLi.nativeElement.classList.remove('active');
        this.serviciosLi.nativeElement.classList.remove('active');
        this.aboutLi.nativeElement.classList.remove('active');
        this.contactLi.nativeElement.classList.remove('active');
        this.portafolioli.nativeElement.classList.add('active');
        break;
      default:
        this.homeLi.nativeElement.classList.add('active');
        this.serviciosLi.nativeElement.classList.remove('active');
        this.aboutLi.nativeElement.classList.remove('active');
        this.contactLi.nativeElement.classList.remove('active');
        this.portafolioli.nativeElement.classList.remove('active');
        break;
    }
  }

}
