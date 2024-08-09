class TrieNode {
    constructor(){
        this.children = {}
        this.isEnd    = false 
    }
}

class Trie{

    constructor(){
        this.root = new TrieNode()
    }

    //insert a word into  a trie
    insert(word){

        let node = this.root
        for(let char of word){

            //If the current character doesn't have a child node, we create a new TrieNode for that character.
            if (!node.children[char]) {
                
                node.children[char] = new TrieNode()
            }

            node = node.children[char]
        }

        node.isEnd = true;
    }


    //search for the word in trie
    search(word){

        let node = this.root

        for(let char of word){

            if (!node.children[char]) {
                return false;
            }

            node = node.children[char]
        }

        return node.isEnd;
    }

    //check a prefix existing in a trie or not 
    prefixSearch(word){

        let node = this.root

        for(let char of word){

            if (!node.children[char]) {
                return false
            }

            node = node.children[char]
        }

        return true;
    }

}

const  trie = new Trie()

trie.insert('cat')
trie.insert('shamnad s dev')

console.log(trie.search('cat'));
console.log(trie.prefixSearch('sha'));
console.log(trie.search('adil'));


