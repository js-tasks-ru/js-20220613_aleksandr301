export default class ColumnChart {
    constructor(params){
        let {link, data, label, value, formatHeading} = params || {}
        this.link = link || '#'
        this.data = data || []
        this.label = label || 'Main'
        this.value = value || 0
        this.chartHeight = 50
        this.formatHeading = formatHeading || function (val){return val};
        this.render()
    }
    createChartContainer(child){
        const container = document.createElement('div')
        container.className = this.data.length === 0 ? "column-chart_loading" : ''
        container.innerHTML = `
        <div class="column-chart" style="--chart-height: ${this.chartHeight}">
          ${child || ''} 
        </div>`
        return container
    }
    createChartHead(){
      return `
      <div class="column-chart__title">Total ${this.label}
      <a href="/${this.label}" class="column-chart__link">View all</a>
      </div>`
    }
    createChartBody(){
        const props = val => {
          const maxValue = Math.max(...this.data)
          const value = this.chartHeight/maxValue*val
          return {
            percent: (val / maxValue * 100).toFixed(0) + '%',
            value: Math.floor(value)}
        }
        
        return `<div class="column-chart__container">
        <div data-element="header" class="column-chart__header">${this.formatHeading(this.value)}</div>
        <div data-element="body" class="column-chart__chart">
          ${this.data.map(val => `<div style="--value: ${props(val).value}" data-tooltip="${props(val).percent}"></div>`).join('')}
        </div>
      </div>`
    }
    render(){
        this.element = this.createChartContainer(this.createChartHead() + this.createChartBody())
    }
    destroy(){}
    remove(){
      this.element.remove()
    }
    update(data){
      this.data = data
      const body = document.querySelector('.column-chart__container')
      body.innerHTML = this.createChartBody()
    }
}
