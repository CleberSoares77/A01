from flask import Flask, render_template
import sqlite3

app = Flask(__name__)

# Rota para exibir os dados do banco de dados
@app.route('/')
def exibir_dados():
    # Conectar ao banco de dados SQLite (substitua 'database.db' pelo nome do seu arquivo de banco de dados)
    connection = sqlite3.connect('database.db')
    cursor = connection.cursor()

    # Consulta para obter os dados (substitua 'sua_tabela' pelo nome da tabela no seu banco de dados)
    cursor.execute('SELECT * FROM sua_tabela')
    dados = cursor.fetchall()

    connection.close()

    return render_template('index.html', dados=dados)

if __name__ == '__main__':
    app.run(debug=True)
