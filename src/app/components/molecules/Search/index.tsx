import React from 'react'

interface SearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function index({ value, onChange }: SearchProps) {
  return (
      <form className="w-full">
      <div className="relative w-full">
        <input
          type="search"
          id="default-search"
          value={value}
          onChange={onChange}
          className="w-full p-2 text-sm text-gray-900 border rounded-lg h-[40px]"
          placeholder="Buscar por nombre de promoción"
        />
      </div>
    </form>
  )
}
