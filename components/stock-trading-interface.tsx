"use client"

import { useState } from "react"
import { ChevronDown, Info, ChevronRight, Share2, ExternalLink } from "lucide-react"
import { Button } from "./ui/button"

const stockData = [
  {
    company: "애플",
    country: "미국",
    symbol: "AAPL",
    currentPrice: "348,020",
    currentPriceWon: "242.06",
    gainPercent: "56.95%",
    gainPercentWon: "53.57%",
    avgPrice: "435,026",
    avgPriceWon: "305.36",
    totalGainPercent: "90.90%",
    totalGainPercentWon: "85.87%",
  },
  {
    company: "테슬라",
    country: "미국",
    symbol: "TSLA",
    currentPrice: "287,450",
    currentPriceWon: "199.82",
    gainPercent: "42.15%",
    gainPercentWon: "38.92%",
    avgPrice: "398,120",
    avgPriceWon: "278.45",
    totalGainPercent: "72.18%",
    totalGainPercentWon: "68.45%",
  },
  {
    company: "마이크로소프트",
    country: "미국",
    symbol: "MSFT",
    currentPrice: "425,680",
    currentPriceWon: "296.12",
    gainPercent: "28.45%",
    gainPercentWon: "25.78%",
    avgPrice: "331,250",
    avgPriceWon: "230.45",
    totalGainPercent: "65.32%",
    totalGainPercentWon: "62.18%",
  },
]

export default function StockTradingInterface() {
  const [activeTab, setActiveTab] = useState("해외잡고")
  const [filterType, setFilterType] = useState("전체")
  const [currencyFilter, setCurrencyFilter] = useState("전체")

  return (
    <div className="w-full max-w-md mx-auto bg-white min-h-screen">
      {/* Header Tabs */}
      <div className="bg-blue-900 text-white">
        <div className="flex">
          <button
            className={`flex-1 py-4 text-center font-medium ${
              activeTab === "해외잡고" ? "border-b-2 border-orange-400" : ""
            }`}
            onClick={() => setActiveTab("해외잡고")}
          >
            해외잡고
          </button>
          <button
            className={`flex-1 py-4 text-center font-medium ${
              activeTab === "매매손익" ? "border-b-2 border-orange-400" : ""
            }`}
            onClick={() => setActiveTab("매매손익")}
          >
            매매손익
          </button>
        </div>
      </div>

      {/* Filter Section */}
      <div className="p-4 bg-gray-50">
        <div className="flex gap-3 mb-4">
          {/* Filter Dropdown */}
          <div className="flex-1">
            <button className="w-full p-3 bg-white border border-gray-300 rounded-lg flex items-center justify-between">
              <span className="text-gray-700">{filterType}</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {/* Currency Filter Buttons */}
          <div className="flex bg-white rounded-lg border border-gray-300 overflow-hidden">
            {["전체", "외화", "원화"].map((type) => (
              <button
                key={type}
                className={`px-4 py-3 text-sm font-medium ${
                  currencyFilter === type ? "bg-gray-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setCurrencyFilter(type)}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Include Costs Toggle */}
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-300">
            <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
            <span className="text-sm font-medium text-gray-700">비용포함</span>
          </div>
        </div>

        {/* Market Status */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-sm">현재시장 시세로 계산</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="text-sm text-gray-600">출금가능</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm text-gray-600">주문가능</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="px-4 pb-4">
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-white p-3 rounded-lg border">
            <div className="text-xs text-gray-500 mb-1">매입금액</div>
            <div className="text-right">
              <div className="text-lg font-medium">원</div>
              <div className="text-xs text-gray-500">손익</div>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg border">
            <div className="text-xs text-gray-500 mb-1">평가금액</div>
            <div className="text-right">
              <div className="text-lg font-medium">원</div>
              <div className="text-xs text-gray-500 flex items-center justify-end gap-1">
                수익률 <Share2 className="w-3 h-3" />
              </div>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg border">
            <div className="text-xs text-gray-500 mb-1">추정자산</div>
            <div className="text-right">
              <div className="text-lg font-medium">원</div>
              <div className="text-xs text-gray-500">대출가능</div>
            </div>
          </div>
        </div>

        <Button className="w-full mb-4 bg-gray-100 text-gray-700 hover:bg-gray-200">금액조회</Button>
      </div>

      {/* Stock Table */}
      <div className="bg-white">
        {/* Table Header - Horizontally Scrollable */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header Row */}
            <div className="grid grid-cols-7 gap-2 p-3 bg-gray-50 border-b text-xs text-gray-600">
              <div className="flex items-center gap-1">
                종목명 <ChevronDown className="w-3 h-3" />
              </div>
              <div className="flex items-center gap-1">
                평가손익(원) <ChevronDown className="w-3 h-3" />
              </div>
              <div className="flex items-center gap-1">
                평가손익(외) <ChevronDown className="w-3 h-3" />
              </div>
              <div className="flex items-center gap-1">
                잔고수량 <ChevronDown className="w-3 h-3" />
              </div>
              <div className="text-center">종목코드</div>
              <div className="flex items-center gap-1">
                평가수익률(원) <ChevronDown className="w-3 h-3" />
              </div>
              <div className="flex items-center gap-1">
                평가수익률(외) <ChevronDown className="w-3 h-3" />
              </div>
            </div>

            {/* Stock Rows */}
            {stockData.map((stock, index) => (
              <div key={index} className="grid grid-cols-7 gap-2 p-3 border-b hover:bg-gray-50">
                <div>
                  <div className="font-medium text-sm">{stock.company}</div>
                  <div className="text-xs text-blue-600">
                    {stock.country} {stock.symbol}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-red-500 font-medium">{stock.currentPrice}</div>
                </div>
                <div className="text-right">
                  <div className="text-red-500 font-medium">{stock.currentPriceWon}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm">-</div>
                </div>
                <div className="text-center text-xs text-gray-500">{stock.symbol}</div>
                <div className="text-right">
                  <div className="text-red-500 font-medium">{stock.gainPercent}</div>
                </div>
                <div className="text-right">
                  <div className="text-red-500 font-medium">{stock.gainPercentWon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Link */}
      <div className="p-4 text-right">
        <button className="text-sm text-gray-600 flex items-center gap-1 ml-auto">
          유의사항 <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white">
        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-5 py-2">
            <button className="flex flex-col items-center py-2">
              <div className="w-6 h-6 mb-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3a2 2 0 0 0 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 12H9V5h10v10z" />
                </svg>
              </div>
              <span className="text-xs">HOME</span>
            </button>
            <button className="flex flex-col items-center py-2">
              <div className="w-6 h-6 mb-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <span className="text-xs">관심그룹</span>
            </button>
            <button className="flex flex-col items-center py-2">
              <div className="w-6 h-6 mb-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18z" />
                </svg>
              </div>
              <span className="text-xs">즉시현재가</span>
            </button>
            <button className="flex flex-col items-center py-2">
              <div className="w-6 h-6 mb-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                </svg>
              </div>
              <span className="text-xs">국내주식</span>
            </button>
            <button className="flex flex-col items-center py-2">
              <div className="w-6 h-6 mb-1 relative">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded text-xs flex items-center justify-center">
                  📊
                </div>
              </div>
              <span className="text-xs">국내주식잔고·손</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Indicator */}
      <div className="fixed bottom-1 left-1/2 transform -translate-x-1/2">
        <div className="w-32 h-1 bg-white rounded-full"></div>
      </div>
    </div>
  )
}
