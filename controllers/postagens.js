const PostagemModel = require('../models/postagem');

class Postagens {

    async get(){
        const postagens = await PostagemModel.find({});
        return postagens;
    }

    async getPorId (id) {
        const postagem = await PostagemModel.find({_id: id});
        return postagem;git
    }

    async create (postagemDTO){
        await new PostagemModel(postagemDTO).save();
    }

    async update (id, postagemDTO){
        await PostagemModel.updateOne({_id: id}, postagemDTO);
    }
}

module.exports = new Postagens();
