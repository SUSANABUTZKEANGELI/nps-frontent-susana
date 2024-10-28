// Define as categorias disponíveis
const categorias = [
  { id: 1, nome: 'Product access' },
  { id: 2, nome: 'Connection / Internet' },
  { id: 3, nome: 'Slowness / Crash' },
  { id: 4, nome: 'Interface / Appearance' },
  { id: 5, nome: 'Bugs' },
  { id: 6, nome: 'Others' },
];

interface CategoryProps{
  onSelectCategory :(categoryId: number) => void, 
  selectedCategory: number | null}

const Category: React.FC<CategoryProps> = ({onSelectCategory, selectedCategory}:CategoryProps) => {
  
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
        {categorias.map(categoria => (
          <button
            key={categoria.id}
            onClick={() => onSelectCategory(categoria.id)}
            style={{
              padding: '10px 15px',
              width: '200px',
              backgroundColor: selectedCategory === categoria.id ? '#4CAF50' : '#ffffff',
              color: selectedCategory === categoria.id ? '#fff' : '#000',
              borderRadius: '5px',
              cursor: 'pointer',
              border: '1px solid #000',
              transition: 'background-color 0.3s',
            }}
          >
            {categoria.nome}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
