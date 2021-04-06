import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  dadosTabela = [
    {name: 'Maria', value: 3},
    {name: 'José', value: 5},
  ];

  dadosGrafico = [];

  ngOnInit(): void {
    this.refresh();
  }

  addLine(): void {
    this.dadosTabela.push({name: '', value: null});
    console.log('tabela');
    console.log(this.dadosTabela);
  }

  refresh(): void {
    this.dadosGrafico = this.dadosTabela
      .filter(({name, value}) => name && value)
      .map(({name, value}) => ({name: `${name}: ${value}`, value}));
    console.log('grafico');
    console.log(this.dadosGrafico);
  }
}
