import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-pexels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pexels.component.html',
  styleUrls: ['./pexels.component.scss']
})
export class PexelsComponent implements OnInit{
  constructor(private apiService:ApiService) {

  }
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.apiService.getPexels().subscribe((res)=> console.log(res)
  )
  this.apiService.pexelsSearch().subscribe((res)=> console.log(res)
  )
  this.apiService.getImagePexels().subscribe((res)=> console.log(res)
  )
  this.apiService.getCuratedPexelImage().subscribe((res)=> console.log(res)
  )
}
}
