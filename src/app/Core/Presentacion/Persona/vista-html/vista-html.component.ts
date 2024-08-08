import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vista-html',
  templateUrl: './vista-html.component.html',
  styleUrl: './vista-html.component.css'
})
export class VistaHTMLComponent implements OnInit {
  @ViewChild('iframeElement') iframeElement!: ElementRef;
  cssContent: string = '';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Cargar el contenido del archivo styles.css
    this.http.get('styles.css', { responseType: 'text' })
      .subscribe(css => {
        this.cssContent = css;
      });
  }

  loadContent() {
    const content = `
      <html>
        <head>
          <title>Embedded Content</title>
        </head>
        <body>
          <h1>Title</h1>
          <p>This is a paragraph.</p>
          <button onclick="alert('Button Clicked!')">Click Me</button>
        </body>
      </html>
    `;

    const iframeDoc = this.iframeElement.nativeElement.contentDocument || this.iframeElement.nativeElement.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(content);
    const styleElement = iframeDoc.createElement('style');
    styleElement.type = 'text/css';
    styleElement.appendChild(iframeDoc.createTextNode(this.cssContent));
    iframeDoc.head.appendChild(styleElement);
    iframeDoc.close();
  }
}