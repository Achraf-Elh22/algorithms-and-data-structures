# Stack:

Stack is a **linear data structure (elements form a sequence)** that keeps its data in Stack. A Stack use LIFO order which mean the Last item pushed is processed first, all the old items need to wait until new item processed.

!["stack representation"]("./assets/stack.png")

> Stacks are often described using the analogy of a spring-loaded stack of plates in a cafeteria. Clean plates are placed on top of the stack, pushing down any already there. When a plate is removed from the stack, the one below it pops up to become the new top plate. <a name="myfootnote1">1</a>: Wikipedia
>



## Common operations

The basic operation that a Stack may perform are the following:

- _push :_ add new element on the top.
- _pop :_ remove an element from the top.
- _peek :_ see the element on the top without removing it.

**_NB:_** Operations like finds, updating the elements are not typically for stack, the stack only interest in working with the top.

## Applications:

Stack data structure can be used to solve different algorithmic tasks such as:

- graph topological sorting,
- finding strongly connected components in graphs,
- The Tower of Hanoi Problem,
- remembering partially completed tasks,
- undoing (backtracking from) an action
- and many more...

## Implementation:

Stack data structure can be implemented using Linked List. We can use `append` and `deleteTail` to performe the common operations of Stack `pop` and `push`.

## Complexities:
- **Access**: *O(n)*
- **Search**: *O(n)*
- **Insertion(push) :** *O(1)*
- **Deletion(pop) :** *O(1)*

<sup>[1](#myfootnote1) https://en.wikipedia.org/wiki/Stack_(abstract_data_type)</sup>
