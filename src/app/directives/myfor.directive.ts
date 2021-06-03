import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myCustomFor]'
})
export class MyforDirective implements OnInit {
  @Input("myCustomForEm") numbers: number[] = []

  // html de exemplo usando essa diretiva
  // <ul>
  //     <li *myCustomFor="let n em [1,2,3]">
  //         {{ n }}
  //     </li>
  // </ul>

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) { }

  ngOnInit(): void {
    for(let number of this.numbers) {
      this.container.createEmbeddedView(
        this.template, { $implicit: number }
      )
    }
  }

}
