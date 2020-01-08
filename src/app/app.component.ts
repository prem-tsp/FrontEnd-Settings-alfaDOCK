import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges,Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, OnChanges {
  name = 'Angular';
  @Input() txt; 
  ngOnInit()
  {
    console.log("Inside OnInit")
    this.togglePanel()  
  }
 

 displayLorem: boolean = false;
  
 displayBut: boolean = false;
 
setButton()
{
  this.toggleLorem()
  this.displayBut = true;
}
setLorem()
{
  this.displayBut = false
  this.displayLorem = true;
}
toggleLorem()
{
  this.displayLorem = false;
}

//Remove all Highlight Links
removeHighlightLink()
{
  var links = document.getElementsByClassName("links")
  for(let j = 0;j < links.length; j++)
    {
      links[j].classList.remove("activate")
    } 
}

togglePanel()
{
  var acc = document.getElementsByClassName("accordion");

  var awo = document.getElementsByClassName("accordionwo");

  var links = document.getElementsByClassName("links")

for (let i = 0; i < acc.length; i++) {
  
  acc[i].addEventListener("click", function(e) {
    
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    for(let j = 0;j < awo.length; j++)
    {
      awo[j].classList.remove("activewo");
    }
     
    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
  
}

for(let j = 0;j < awo.length; j++){

  awo[j].addEventListener("click", function(){
    
    for(let j = 0;j < awo.length; j++)
    {
      awo[j].classList.remove("activewo")
    }

    for(let j = 0;j < links.length; j++)
    {
      links[j].classList.remove("activate")
    } 
    
    this.classList.add("activewo");

  })

}
}

highlightLink()
{
  var links = document.getElementsByClassName("links")
  var awo = document.getElementsByClassName("accordionwo");
  //console.log(event.target.id);
  for(let i = 0;i < links.length; i++)
  {
    links[i].addEventListener("click", function(){
    
    for(let j = 0;j < links.length; j++)
    {
      links[j].classList.remove("activate")
    }

    for(let j = 0;j < awo.length; j++)
    {
      awo[j].classList.remove("activewo")
    } 

    this.classList.add("activate");
   
    })
  }
}

 /* ngOnDestroy()
  {
    console.log("Inside OnDestroy")
  }*/
  ngOnChanges(changes: SimpleChanges)
  {
     console.log("Changes")
  }
 
}
