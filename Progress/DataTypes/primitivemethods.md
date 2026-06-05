
There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.

String, Number, Boolean, Symbol and BigInt are the objects of the primitives

Primitives except null and undefined provide many helpful method

Formally, these methods work via temporary objects, but JavaScript engines are well tuned to optimize that internally, so they are not expensive to call.


|Math.floor	|Math.ceil|	Math.round	|Math.trunc|
|------------|----------|------------|----------|
|3.1 |	3|	4|	3|  3|
|3.5 |	3|	4|	4|  3|
|3.6 |	3|	4|	4|	3|
|-1.1| -2| -1| -1| -1|
|-1.5| -2| -1| -1| -1|
|-1.6| -2| -1| -2| -1|