export default class ColumnChart {
    constructor(params){
        this.link = params.link || '#'
        this.data = params.data || []
        this.label = params.label || 'Main'
        this.value = params.value || 0
        this.formatHeading = params.formatHeading || function (data){};
        this.render()
    }
    createChartContainer(child){
        const container = document.createElement('div')
        container.innerHTML = `
        <div class="column-chart" style="--chart-height: 50">
        ${child || ''} 
        </div>`
        return container
    }
    createChartHead(){
        const head = document.createElement('div')
        head.innerHTML = `<div class="column-chart__title">
        Total orders
        <a href="/sales" class="column-chart__link">View all</a>
      </div>`
      return head.firstChild.innerHTML
    }
    createChartBody(){
        const body = document.createElement('div')
        body.innerHTML = `<div class="column-chart__container">
        <div data-element="header" class="column-chart__header">344</div>
        <div data-element="body" class="column-chart__chart">
          ${this.data.map(value => `<div style="--value: ${value}" data-tooltip="${value}%"></div>`).join('')}
        </div>
      </div>`
      return body.firstChild.innerHTML
    }
    render(){
        this.element = this.createChartContainer(this.createChartHead() + this.createChartBody())
    }
}
