import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent {
  id : number | undefined;
  editMode!: false;
  constructor (private route:ActivatedRoute){}
  ngOnInit(){
    this.route.params.subscribe(
      (params:Params)=>{
          this.id = +params['id'];
          this.editMode = params['id'];
          // this.editMode = params['id'] !=null;
    });
  }
}
