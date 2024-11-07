type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  height: number;
  width: number;
};
type shape = Circle | Rectangle;

const calculateShapeArea = (shapeObj: shape): number => {
  if (shapeObj.shape === "circle") {
    return parseFloat((Math.PI * shapeObj.radius * shapeObj.radius).toFixed(2));
  } else if ((shapeObj.shape = "rectangle")) {
    const { width, height } = shapeObj;
    return width * height;
  } else {
    return 0;
  }
};

const res1 = calculateShapeArea({ shape: "circle", radius: 5 });
const res2 = calculateShapeArea({ shape: "rectangle", height: 5, width: 10 });
console.log(res1);
console.log(res2);
