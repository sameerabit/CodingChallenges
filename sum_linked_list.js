// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let l1Array = [];
    let l2Array = [];

    while(l1){
        l1Array.push(l1.val);
        l1=l1.next;
    }

    while(l2){
        l2Array.push(l2.val);
        l2=l2.next;
    }

    l1Array = l1Array.reverse();
    l2Array = l2Array.reverse();

    let l1Num = 0;
    for(i=0;i<=l1Array.length-1;i++){
        l1Num = l1Num*10+l1Array[i];
    }

    let l2Num = 0;
    for(i=0;i<=l2Array.length-1;i++){
        l2Num = l2Num*10+l2Array[i];
    }

    let l3Num = l1Num + l2Num;

    let l3Array = Array.from(String(l3Num), Number).reverse();

    xNode = null;

    const linkedList = new LinkedList();

    for(i=0;i<=l3Array.length-1;i++){
        linkedList.append(l3Array[i]);
    }

    return linkedList.head;

};

class LinkedList {
        constructor(){
            this.head = null;
        }

        append(value){
            let node = new ListNode(value);
            if(!this.head){
                this.head = node;
            }else{
                let current = this.head;
                while(current.next){
                    current = current.next;
                }
                current.next = node;
            }
        }
    }