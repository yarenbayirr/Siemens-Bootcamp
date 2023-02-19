class Lesson{
    attendance: number;
    nameOfLesson : string;
    trueAnswers : number;
    falseAnswers: number;
    calculateScore():number{
        if(this.falseAnswers %3 == 0){
            return (this.trueAnswers) - (this.falseAnswers/3);
        }
        else{
            return (this.trueAnswers) - (Math.floor(this.falseAnswers/3))
        }
    }
}


class Maths extends Lesson{
    calculateScore() : number{
       var baseScore = super.calculateScore();
       return baseScore * 3;
    }
}

class Physics extends Lesson{
    calculateScore() : number{
       var baseScore = super.calculateScore();
       return baseScore * 2.8;
    }
}

class Chemistry extends Lesson{
    calculateScore() : number{
       var baseScore = super.calculateScore();
       return baseScore * 3.1;
    }
}

class Biology extends Lesson{
    calculateScore() : number{
       var baseScore = super.calculateScore();
       return baseScore * 3.1;
    }
}