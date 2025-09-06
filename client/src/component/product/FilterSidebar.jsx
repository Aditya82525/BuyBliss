import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate=useNavigate();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  })

  const [priceRange, setPriceRange] = useState([0, 100])

  const categories = ["Topwear", "Bottomwear", "Footwear", "Accessories"]
  const genders = ["Men", "Women", "Unisex"]
  const colors = ["Black", "White", "Red", "Blue", "Green"]
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"]
  const materials = ["Cotton", "Polyester", "Wool", "Linen", "Denim"]
  const brands = ["Nike", "Adidas", "Puma", "Uniqlo", "Zara"]

  useEffect(() => {
    const params = Object.fromEntries([...searchParams])
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: +params.minPrice || 0,
      maxPrice: +params.maxPrice || 100,
    })
    setPriceRange([+params.minPrice || 0, +params.maxPrice || 100])
  }, [searchParams])

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target
    let newFilters = { ...filters }

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value]
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value)
      }
    } else {
      newFilters[name] = value
    }

    setFilters(newFilters)

    const params = new URLSearchParams()
    for (let key in newFilters) {
      const val = newFilters[key]
      if (Array.isArray(val) && val.length > 0) {
        params.set(key, val.join(","))
      } else if (val !== "") {
        params.set(key, val)
      }
    }
    setSearchParams(params)
    navigate(`?${params.toString()}`)
  }

  const handleColorClick = (color) => {
    const newFilters = { ...filters, color }
    setFilters(newFilters)
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev)
      params.set("color", color)
      return params
    })
  }

  return (
    <div className="p-4 space-y-6">
      {/* Category */}
      <div>
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map(cat => (
          <div key={cat} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={cat}
              checked={filters.category === cat}
              className="mr-2 h-4 w-4 text-blue-500 border-gray-300"
              onChange={handleFilterChange}
            />
            <span className="text-gray-700">{cat}</span>
          </div>
        ))}
      </div>

      {/* Gender */}
      <div>
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {genders.map(g => (
          <div key={g} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              value={g}
              checked={filters.gender === g}
              className="mr-2 h-4 w-4 text-blue-500 border-gray-300"
              onChange={handleFilterChange}
            />
            <span className="text-gray-700">{g}</span>
          </div>
        ))}
      </div>

      {/* Color */}
      <div>
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-3">
          {colors.map(color => (
            <button
              key={color}
              onClick={() => handleColorClick(color)}
              className={`
                w-8 h-8 rounded-full transition border-2
                ${filters.color === color ? "ring-2 ring-offset-2 ring-black" : "border-gray-300"}
              `}
              style={{ backgroundColor: color.toLowerCase() }}
              aria-label={color}
            ></button>
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map(sz => (
          <div key={sz} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              value={sz}
              checked={filters.size.includes(sz)}
              className="mr-2 h-4 w-4 text-blue-500 border-gray-300"
              onChange={handleFilterChange}
            />
            <span className="text-gray-700">{sz}</span>
          </div>
        ))}
      </div>

      {/* Material */}
      <div>
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {materials.map(mat => (
          <div key={mat} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="material"
              value={mat}
              checked={filters.material.includes(mat)}
              className="mr-2 h-4 w-4 text-blue-500 border-gray-300"
              onChange={handleFilterChange}
            />
            <span className="text-gray-700">{mat}</span>
          </div>
        ))}
      </div>

      {/* Brand */}
      <div>
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {brands.map(brand => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              checked={filters.brand.includes(brand)}
              className="mr-2 h-4 w-4 text-blue-500 border-gray-300"
              onChange={handleFilterChange}
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price */}
      <div>
        <label className="block text-gray-600 font-medium mb-2">Price</label>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            value={priceRange[0]}
            className="w-16 p-1 border rounded focus:ring-blue-400 focus:border-blue-400"
            onChange={e => {
              const newMin = +e.target.value;
              setPriceRange([newMin, priceRange[1]]);
              setFilters({ ...filters, minPrice: newMin });
              setSearchParams((prev) => {
                const params = new URLSearchParams(prev);
                params.set("minPrice", newMin);
                return params;
              });
            }}
          />
          <span className="text-gray-500">—</span>
          <input
            type="number"
            value={priceRange[1]}
            className="w-16 p-1 border rounded focus:ring-blue-400 focus:border-blue-400"
            onChange={e => {
              const newMax = +e.target.value;
              setPriceRange([priceRange[0], newMax]);
              setFilters({ ...filters, maxPrice: newMax });
              setSearchParams((prev) => {
                const params = new URLSearchParams(prev);
                params.set("maxPrice", newMax);
                return params;
              });
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default FilterSidebar
