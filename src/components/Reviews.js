import React from 'react';

class Reviews extends React.Component {




review() {
  return (
    <div className="reviewBox">
      <form>
      <input
        type="text"
        className="userEmail"
        name="userEmail"
        placeholder="E-mail"
        value={this.state.userEmail}
      />
      <textarea
      type="text"
      className="review"
      name="review"
      placeholder="Mensagem (opcional)"
      value={this.state.review}
      />
      </form>
      <button className="reviewButton">Avaliar</button>
    </div>
  );
}


render () {

}
}