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
]

export default function StockTradingInterface() {
  const [activeTab, setActiveTab] = useState("해외잔고")
  const [filterType, setFilterType] = useState("전체")
  const [currencyFilter, setCurrencyFilter] = useState("전체")

  return (
    <div className="w-full max-w-md mx-auto bg-white min-h-screen">
      {/* Header Tabs */}
      <div className="bg-blue-900 text-white">
        <div className="flex">
          <button
            className={`flex-1 py-4 text-center font-semibold ${
              activeTab === "해외잔고" ? "border-b-2 border-orange-400" : ""
            }`}
            onClick={() => setActiveTab("해외잔고")}
          >
            해외잔고
          </button>
          <button
            className={`flex-1 py-4 text-center font-semibold ${
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
          <div className="w-24">
            <button className="w-full p-3 bg-white border border-gray-300 rounded-lg flex items-center justify-between">
              <span className="text-gray-700 text-sm">{filterType}</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {/* Currency Filter Buttons */}
          <div className="flex bg-white rounded-lg border border-gray-300 overflow-hidden flex-1">
            {["전체", "외화", "원화"].map((type) => (
              <button
                key={type}
                className={`flex-1 px-3 py-3 text-xs font-medium whitespace-nowrap ${
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

      {/* Summary Cards - 2x3 Grid */}
      <div className="px-4 pb-4">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <tbody>
              {/* First Row */}
              <tr className="border-b border-gray-200">
                <td className="py-2 px-3 text-xs text-gray-600 font-normal border-r border-gray-200">매입금액</td>
                <td className="py-2 px-3 text-base font-medium text-right border-r border-gray-200 tabular-nums">—원</td>
                <td className="py-2 px-3 text-xs text-gray-600 font-normal border-r border-gray-200">손익</td>
                <td className="py-2 px-3 text-base font-medium text-right text-red-500 tabular-nums">—원</td>
              </tr>
              
              {/* Second Row */}
              <tr className="border-b border-gray-200">
                <td className="py-2 px-3 text-xs text-gray-600 font-normal border-r border-gray-200">평가금액</td>
                <td className="py-2 px-3 text-base font-medium text-right border-r border-gray-200 tabular-nums">—원</td>
                <td className="py-2 px-3 text-xs text-gray-600 font-normal border-r border-gray-200">
                  <div className="flex items-center gap-1">
                    수익률 <Share2 className="w-3 h-3 text-orange-400" />
                  </div>
                </td>
                <td className="py-2 px-3 text-base font-medium text-right tabular-nums">—%</td>
              </tr>
              
              {/* Third Row */}
              <tr>
                <td className="py-2 px-3 text-xs text-gray-600 font-normal border-r border-gray-200">추정자산</td>
                <td className="py-2 px-3 text-base font-medium text-right border-r border-gray-200 tabular-nums">——원</td>
                <td className="py-2 px-3 text-xs text-gray-600 font-normal border-r border-gray-200">대출가능</td>
                <td className="py-2 px-3">
                  <button className="w-full text-xs bg-white border border-gray-300 rounded px-3 py-1.5 text-gray-600 hover:bg-gray-50">
                    금액조회
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

      {/* Stock Table */}
      <div className="bg-white">
        {/* Table Header - Horizontally Scrollable */}
        <div className="overflow-x-auto">
          <table className="min-w-[1200px] w-full">
            <thead>
              <tr className="bg-gray-50 text-xs text-gray-600">
                {/* First row columns */}
                <th className="py-2 px-3 text-left font-normal border-b border-r-2 border-gray-200 border-r-gray-400">
                  <div className="flex items-center gap-1">
                    종목명 <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-2 px-2 text-right font-normal border-b border-r border-gray-200">
                  <div className="flex items-center justify-end gap-1">
                    평가손익(원) <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-2 px-3 text-right font-normal border-b border-r border-gray-200">
                  <div className="flex items-center justify-end gap-1">
                    평가손익(외) <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-2 px-3 text-right font-normal border-b border-r border-gray-200">
                  <div className="flex items-center justify-end gap-1">
                    잔고수량 <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-2 px-3 text-right font-normal border-b border-r border-gray-200">
                  <div className="flex items-center justify-end gap-1">
                    매입금액(원) <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-2 px-3 text-right font-normal border-b border-r border-gray-200">
                  <div className="flex items-center justify-end gap-1">
                    매입금액(외) <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-2 px-3 text-right font-normal border-b border-r border-gray-200">
                  <div className="flex items-center justify-end gap-1">
                    매입환율 <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th rowSpan={2} className="py-2 px-3 text-right font-normal border-b border-gray-200">
                  <div className="flex items-center justify-end gap-1">
                    보유비중 <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
              </tr>
              <tr className="bg-gray-50 text-xs text-gray-500">
                {/* Second row columns */}
                <th className="py-2 px-3 text-left font-normal border-b border-r-2 border-gray-200 border-r-gray-400">
                  <div className="flex items-center gap-1">
                    종목코드 <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-2 px-2 text-right font-normal border-b border-r border-gray-200">
                  <div className="flex items-center justify-end gap-1">
                    평가수익률(원) <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-2 px-3 text-right font-normal border-b border-r border-gray-200">
                  <div className="flex items-center justify-end gap-1">
                    평가수익률(외) <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-2 px-3 text-right font-normal border-b border-r border-gray-200">
                  <div className="flex items-center justify-end gap-1">
                    매도가능수량 <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-2 px-3 text-right font-normal border-b border-r border-gray-200">
                  <div className="flex items-center justify-end gap-1">
                    평가금액(원) <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-2 px-3 text-right font-normal border-b border-r border-gray-200">
                  <div className="flex items-center justify-end gap-1">
                    평가금액(외) <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="py-2 px-3 text-right font-normal border-b border-r border-gray-200">
                  <div className="flex items-center justify-end gap-1">
                    현재환율 <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {/* Stock Rows */}
              {stockData.map((stock, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  {/* 종목명/종목코드 */}
                  <td className="py-4 px-3 border-r-2 border-gray-400">
                    <div className="font-medium text-sm">{stock.company}</div>
                    <div className="text-xs text-blue-600 mt-1">{stock.symbol}</div>
                  </td>
                  {/* 평가손익(원)/평가수익률(원) */}
                  <td className="py-4 px-2 text-right border-r border-gray-200">
                    <div className="text-red-500 font-medium tabular-nums">{stock.currentPrice}</div>
                    <div className="text-red-500 text-xs tabular-nums mt-1">{stock.gainPercent}</div>
                  </td>
                  {/* 평가손익(외)/평가수익률(외) */}
                  <td className="py-4 px-3 text-right border-r border-gray-200">
                    <div className="text-red-500 font-medium tabular-nums">{stock.currentPriceWon}</div>
                    <div className="text-red-500 text-xs tabular-nums mt-1">{stock.gainPercentWon}</div>
                  </td>
                  {/* 잔고수량/매도가능수량 */}
                  <td className="py-4 px-3 text-right border-r border-gray-200">
                    <div className="text-sm tabular-nums">10</div>
                    <div className="text-xs tabular-nums mt-1">10</div>
                  </td>
                  {/* 매입금액(원)/평가금액(원) */}
                  <td className="py-4 px-3 text-right border-r border-gray-200">
                    <div className="text-sm tabular-nums">{stock.avgPrice}</div>
                    <div className="text-sm tabular-nums mt-1">783,040</div>
                  </td>
                  {/* 매입금액(외)/평가금액(외) */}
                  <td className="py-4 px-3 text-right border-r border-gray-200">
                    <div className="text-sm tabular-nums">{stock.avgPriceWon}</div>
                    <div className="text-sm tabular-nums mt-1">544.38</div>
                  </td>
                  {/* 매입환율/현재환율 */}
                  <td className="py-4 px-3 text-right border-r border-gray-200">
                    <div className="text-sm tabular-nums">1,426.07</div>
                    <div className="text-sm tabular-nums mt-1">1,438.20</div>
                  </td>
                  {/* 보유비중 */}
                  <td className="py-4 px-3 text-right">
                    <div className="text-sm tabular-nums">50%</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
          <div className="grid grid-cols-6 py-2">
            {/* Hamburger Menu */}
            <button className="flex flex-col items-center py-2">
              <div className="w-6 h-6 mb-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </svg>
              </div>
              <span className="text-[10px]"></span>
            </button>
            {/* HOME */}
            <button className="flex flex-col items-center py-2">
              <div className="w-6 h-6 mb-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              </div>
              <span className="text-[10px]">HOME</span>
            </button>
            {/* 관심그룹 */}
            <button className="flex flex-col items-center py-2">
              <div className="w-6 h-6 mb-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <span className="text-[10px]">관심<br/>그룹</span>
            </button>
            {/* 주식현재가 */}
            <button className="flex flex-col items-center py-2">
              <div className="w-6 h-6 mb-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                </svg>
              </div>
              <span className="text-[10px]">주식<br/>현재가</span>
            </button>
            {/* 국내주식 주문 */}
            <button className="flex flex-col items-center py-2">
              <div className="w-6 h-6 mb-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
              </div>
              <span className="text-[10px]">국내주식<br/>주문</span>
            </button>
            {/* 국내주식 잔고·손익 */}
            <button className="flex flex-col items-center py-2">
              <div className="w-6 h-6 mb-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                </svg>
              </div>
              <span className="text-[10px]">국내주식<br/>잔고·손익</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
