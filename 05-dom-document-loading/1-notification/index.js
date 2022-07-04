export default class NotificationMessage {
    static notification;

    timerId;
    element;
    constructor(text = '', { 
        duration = 2000, 
        type = 'success' 
    } = {}) {
        this.text = text
        this.duration = duration
        this.seconds = (duration/1000) + 's'
        this.type = type
        this.render()
    }

    render(){
        this.element = document.createElement('div')
        this.element.className = "notification " + this.type
        this.element.style = `--value:${this.seconds}`
        this.element.innerHTML = `
        <div class="timer"></div>
        <div class="inner-wrapper">
            <div class="notification-header">${this.type}</div>
            <div class="notification-body">
                ${this.text}
            </div>
        </div>
        `
    }

    destroy(){
        this.remove()
        this.element = null
        NotificationMessage.notification = null
    }

    show(parent = document.body){
        if(NotificationMessage.notification){
            NotificationMessage.notification.remove()
        }

        parent.append(this.element)

        this.timerId = setTimeout(() => {
            this.remove()
        }, this.duration)

        NotificationMessage.notification = this
    }

    remove(){
        clearTimeout(this.timerId)

        if(this.element){
            this.element.remove()
        }
    }
}
