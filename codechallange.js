class Node {
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

const n1 = new Node(100);
//console.log(n1);


class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

   
    printListData(){
        let current = this.head;
        
        while(current){
            console.log("\x1b[36m", current.data);
        
            current = current.next;

         }

        }
    addHead(data){
        this.head = new Node(data, this.head);
        this.size ++
    }
    addTail(data){
       let node = new Node(data);
       let current;

       if(!this.head){
           this.head = node;
       } else {
           current = this.head;

           while (current.next) {
               current = current.next;
           }
           current.next = node;

       }
       this.size ++
    }

}

const xx = new LinkedList();


xx.addTail("LAST");
xx.addHead("MID");
xx.addHead("FIRST");

console.log(xx.printListData())

setTimeout(() => { console.clear();}, 2000);

setTimeout(() => { console.log("\x1b[31m", "APPLES");}, 3000);

setTimeout(() => { console.clear();}, 4000);

setTimeout(() => { console.log("\x1b[31m", "APPLES");}, 5000);
