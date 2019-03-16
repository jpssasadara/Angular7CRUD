import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public msg= "Mo message";
  public displayName = false;
  public colors = ["red","blue","green","yellow"];

  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }
  logMessage(value){
    console.log(value);
    this.msg=value;
  }
  changeview(){
    if(this.displayName){
        this.displayName=false;
    }else{
      this.displayName=true;
    }
  }
 
}
