import { Component } from '@angular/core';

interface MenuItem{
  title:string,
  route:string,
}

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  public reactiveMenu : MenuItem[] =[
    {title:'basic', route:'./reactive/basic'},
    {title:'dynamic', route:'./reactive/dynamic'},
    {title:'switch', route:'./reactive/switch'}
  ];
  public authMenu : MenuItem[] =[
    {title:'register', route:'./auth/sign-up'}
  ]

}
