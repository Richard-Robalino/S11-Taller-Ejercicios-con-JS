class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    getArea(){
        return this.height * this.width;
    }
    hasEqualSides(){
        if (this.height == this.width){
            return true;
        }
        else{
            return false;
        }
    }
}