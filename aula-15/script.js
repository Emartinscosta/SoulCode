const pessoa = {
    nome: "Dev Eli Costa",
    idade: 40,
    cumprimentar: function ()  {
        console.log(`Olá meu nome é ${this.nome}.`);
        
    }
   

}
    console.log(pessoa);
    pessoa.cumprimentar();

    //construtores => Função que cria um novo objeto (Instaciar)
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    const pessoa2 = new Pessoa("Daniel", 28);
    console.log(pessoa2);

    //operador spread (Espalhar)
    const produto1 = {
        descricao: "Manga Vermelha",
        preço: 2.5,
        categoria: "Frutas e hortaliças"
    }
    const produto2 = {...produto1};

    produto1.descricao = "Manga Azul";
    console.log(produto1.descricao);
    console.log(produto2.descricao);

    //Desestruturação (Destrution)
    const produto3 = {
        descricao: "SSD 512GB",
        preco: 400
    };
    //const descricao = produto3.descricao;(antes)
    const { descricao, preco } = produto3; //desestuturação
    console.log(descricao);
    console.log(preco);


    const pessoa3 = {
        nome: "Estefane",
        idade: 32,
        Endereco: {
            Rua: "Rua Aqui Perto",
            cep:15078-250,
            UF: "CE"
        }
    };

    const { nome, idade,  Endereco: {Rua, cep , UF} } = pessoa3

    console.log(nome);
    console.log(idade);
    console.log(Rua);
    console.log(cep);
    console.log(UF);


    console.log(pessoa.nome);
    console.log(pessoa3.Endereco.Rua);
    console.log(pessoa3.Endereco.UF);


    const venda = {
        cliente: "Bismark Araujo",
        data: "11/11/2024",
        nota: {
            codigo: "0545087695",
            tpo:"XML"
        }
    }

    const { cliente, nota: {codigo } } = venda;
    console.log("cliente:", cliente);
    console.log("Codigo de nota", codigo);

    const nomes = ["Fabiano", "Thiago", "Marivaldo"]
    const [primeiro, segundo, terceiro, quarto] = nomes;
    console.log (terceiro);
    console.log (quarto);

    const tarefas = [
        { desc: "Estudar JavaScript" },
        { desc: "Academia" },
        { desc: "sair com o Cachorro"},
        
    ];
const [p, s, { desc }] = tarefas;
    //console.log(tarefas[0].descricao);//ñ imprime todos de 
    console.log(desc);

    const nomes2 = [...nomes];

    console.log(nomes2);
