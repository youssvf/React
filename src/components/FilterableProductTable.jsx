import SearchBar from "./SearchBar";
import ProducTable from "./ProducTable";

export default function FilterableProductTable(){
    const PRODUCTS = [
        {category: "Frutas", price: "$1", stocked: true, name: "Manzana"},
        {category: "Frutas", price: "$1", stocked: true, name: "Fruta del dragón"},
        {category: "Frutas", price: "$2", stocked: false, name: "Maracuyá"},
        {category: "Verduras", price: "$2", stocked: true, name: "Espinaca"},
        {category: "Verduras", price: "$4", stocked: false, name: "Calabaza"},
        {category: "Verduras", price: "$1", stocked: true, name: "Guisantes"}
      ];
    
    return(
        <>
        <SearchBar></SearchBar>
        <ProducTable productos={PRODUCTS} mensaje='hola'></ProducTable>
        </>
    )
}