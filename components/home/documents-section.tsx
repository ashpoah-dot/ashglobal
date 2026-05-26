'use client'

import { FileText, Download, Search, Filter } from 'lucide-react'
import { useState } from 'react'

export function DocumentsSection() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const documents = [
    { id: 1, title: 'Organization Constitution', category: 'legal', year: 2024, size: '2.4 MB' },
    { id: 2, title: 'Annual Report 2024', category: 'reports', year: 2024, size: '5.1 MB' },
    { id: 3, title: 'Strategic Plan 2024-2028', category: 'strategic', year: 2024, size: '3.8 MB' },
    { id: 4, title: 'Annual Budget 2024', category: 'financial', year: 2024, size: '1.2 MB' },
    { id: 5, title: 'IT Programs Manual', category: 'training', year: 2024, size: '4.5 MB' },
    { id: 6, title: 'Members Welfare Policy', category: 'policies', year: 2024, size: '1.8 MB' },
    { id: 7, title: 'Financial Audit Report 2023', category: 'financial', year: 2023, size: '2.9 MB' },
    { id: 8, title: 'Training Curriculum Guide', category: 'training', year: 2024, size: '6.2 MB' },
  ]

  const categories = [
    { id: 'all', label: 'All Documents' },
    { id: 'legal', label: 'Legal' },
    { id: 'reports', label: 'Reports' },
    { id: 'financial', label: 'Financial' },
    { id: 'training', label: 'Training' },
    { id: 'policies', label: 'Policies' },
  ]

  const filteredDocs = documents.filter(doc => {
    const matchesCategory = activeCategory === 'all' || doc.category === activeCategory
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-4 text-center">Documents & Resources</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center mb-12">
          Access organizational documents, reports, policies, and training materials
        </p>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-md">
          <div className="flex gap-4 mb-6 flex-col sm:flex-row">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Documents grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map(doc => (
            <div key={doc.id} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-all border-l-4 border-primary">
              <div className="flex items-start justify-between mb-4">
                <FileText className="w-8 h-8 text-primary flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {doc.year}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{doc.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{doc.size}</p>
              <button className="w-full flex items-center justify-center gap-2 bg-primary text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                <Download size={18} />
                Download PDF
              </button>
            </div>
          ))}
        </div>

        {filteredDocs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No documents found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
