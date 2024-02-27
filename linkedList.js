
class Node {
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
    }
    // Insert firt node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++
        console.log("Item " + data + " adicionado a primeira posição")
        this.printListData()
    }

    // Insert last node
    insertLast(data){
        let node = new Node(data);
        let current;
        // if data is empty, make head
        if(!this.head){
            this.head = node;
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }

            current.next = node;
        }
        this.size++
        console.log("Item " + data + " adicionado a última posição")
        this.printListData()
    }
    // Insert at index
    istertAt(data, index) {
        // if index is out of range
        if(index > 0 && index > this.size){
            return;
        }
        if(index === 0){
            this.insertFirst(data)
            return
        }
        const node = new Node(data);
        let current, previus;
        // Set current to first
        current = this.head;
        let count = 0;
        while(count < index){
            previus = current //node before index
            current = current.next
            count++
        }
        
        node.next = current;
        previus.next = node;
        this.size++
        console.log("Item " + data + " adicionado no index " + index)
        this.printListData()
    }
    // Get at index
        getAt(index){
            let current = this.head;
            let count = 0;

            while(current) {
                if(count = index){
                    console.log(current.data)
                }
                count++;
                current = current.next;
            }
            return null;
        }
    // Remove at index
    removeAt(index){
        // if index is out of range
        if(index > 0 && index > this.size){
            return;
        }
        let current = this.head;
        let previus;
        let count = 0;

        //remove first
        if(index === 0){
            this.head = current.next;
        }else{
            while(count < index){
                count++;
                previus = current;
                current = current.next;
            }

            previus.next = current.next
        }

        this.size--;
        console.log("Removido o item '" + current.data + "' de index: " + "[" + index + "]");
        this.printListData();
    }
    // Clear list
    clearList() {
        this.head = null;
        this.size = 0;
        console.log('Lista limpa.')
    }

    // Print list data
    printListData() {
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
            this.size++
        }
    }
}




const ll = new LinkedList();
ll.insertFirst(100)
ll.insertFirst(500)
ll.insertFirst(400)
ll.removeAt(2)

ll.clearList()