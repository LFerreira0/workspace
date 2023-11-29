import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/services/class/class.service';

@Component({
  selector: 'app-class-services',
  templateUrl: './class-services.component.html',
  styleUrls: ['./class-services.component.scss']
})
export class ClassServicesComponent implements OnInit {

  valores: string[] = [];

  constructor(private classService: ClassService) { }

  ngOnInit(): void {
    this.valores = this.classService.getValues();
    this.classService.emitirValores.subscribe(
      valor => console.log(valor)    
    );
  }

  onAddValue(value: string){
    this.classService.addValues(value);
  
    
  }
}
