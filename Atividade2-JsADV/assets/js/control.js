class Control{
    static instance 
    state
    
    constructor(state = off){
        if (!Control.instance){
            Control.instance = this;
        }
        this.state
    }

}