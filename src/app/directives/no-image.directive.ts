import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNoImage]'
})
export class NoImageDirective {

  constructor(
    private nodoDOM:ElementRef,
    private renderer:Renderer2,
  ) { }


    // @HostListenerdecora el método y cd se produce un error
    //en el DOM se llama aut
    @HostListener("error")
    onError():void{

      //primer argumento: elemento del DOMException, el segundo: nombre del atributo
      //y tercer argumento:el nuevo valor del atributo
      this.renderer.setAttribute(this.nodoDOM.nativeElement, "src", "assets/img/no-image.jpg");


    }







}
