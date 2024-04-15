const square = {
  side: 4,
  area() {
    return this.side ** 2;
  },
  log() {
    console.log(this);
  }
};

console.log(square.log());

function log() {
  console.log(this);
}

log();

console.log(this);

const shapes = {
  square: {
    side: 8,
    logSquare() {
      console.log(this);
    }
  },
  circle: {
    radius: 10,
    logCircle() {
      console.log(this);
    }
  },
  logShapes() {
    console.log(this);
  }
};

// shapes.square.logSquare();
shapes.logShapes();
shapes.circle.logCircle();

class Square {
  constructor(side) {
    this.side = side;
  }

  area() {
    return this.side ** 2;
  }
}

const a = {
  name: "AAAAAAAA",
  log1: function () {
    console.log(this);
  },
  log2: () => {
    console.log(this);
  },
  log3() {
    console.log(this);
  }
};

console.log(this);

function logThis(msg) {
  console.log(this, msg);
}
logThis.apply(a, ["hello"]);

logThis.call(a, "hello");

a.log1();
a.log2.call(a);
a.log3();

const logThis2 = () => {
  console.log(this);
};
logThis2.apply(a);

function logMyNameAndMsg(msg) {
  console.log(this.name, msg);
}

const human = {
  name: "John"
};

const cat = {
  name: "Milo"
};

logMyNameAndMsg.apply(human, ["Hello"]);
logMyNameAndMsg.apply(cat);

logMyNameAndMsg.call(human, "Hello");
logMyNameAndMsg.call(cat);

const humanLogger = logMyNameAndMsg.bind(human);

humanLogger("hello");

// logMyNameAndMsg("hello");
