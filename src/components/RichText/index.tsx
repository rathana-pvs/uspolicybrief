'use client'

import React, { useState } from 'react'
import { serializeLexical } from './serialize'
import AdskeeperWidget from '@/components/ads/AdskeeperWidget'

export type RichTextProps = {
  content: any
  className?: string
  articleTitle?: string          // Main article title for deduplication
  adWidgetId?: string            // Top in-article ad (before Continue Reading blur)
  adWidgetId2?: string           // Mid in-article ad (first ad in expanded section)
  secondAdWidgetId?: string      // Alias for adWidgetId2
  adWidgetId3?: string           // Lower in-article ad (lower ad in expanded section)
  underArticleWidgetId?: string  // Under-article native ad grid
  feedWidgetId?: string          // Feed widget
}

function extractNodeText(node: any): string {
  if (!node) return ''
  if (typeof node.text === 'string') return node.text
  if (node.children && Array.isArray(node.children)) {
    return node.children.map(extractNodeText).join(' ')
  }
  return ''
}

export const RichText = ({
  content,
  className,
  articleTitle,
  adWidgetId,
  adWidgetId2,
  secondAdWidgetId,
  adWidgetId3,
  underArticleWidgetId,
  feedWidgetId,
}: RichTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  if (!content) return null

  // Lexical content structure: { root: { children: [...] } }
  const rawNodes = content.root?.children || []

  // Filter out any top nodes that duplicate articleTitle (checks top 3 blocks)
  let nodes = rawNodes
  if (articleTitle && rawNodes.length > 0) {
    const cleanTitle = articleTitle.trim().toLowerCase()
    const titlePrefix = cleanTitle.substring(0, Math.min(25, cleanTitle.length))
    nodes = rawNodes.filter((node: any, idx: number) => {
      if (idx >= 3) return true
      const text = extractNodeText(node).trim().toLowerCase()
      if (!text) return true
      if (
        text === cleanTitle || 
        (titlePrefix.length > 5 && text.startsWith(titlePrefix)) || 
        (text.length > 5 && cleanTitle.startsWith(text.substring(0, 25)))
      ) {
        return false
      }
      return true
    })
  }

  const primaryWidgetId =
    adWidgetId || process.env.NEXT_PUBLIC_ADS_KEEPER_WIDGET_IN_ARTICLE_1 || ''

  const secondaryWidgetId =
    adWidgetId2 || secondAdWidgetId || process.env.NEXT_PUBLIC_ADS_KEEPER_WIDGET_IN_ARTICLE_2 || ''

  // Count total paragraphs
  let paragraphCount = 0
  let splitIndex = nodes.length

  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].type === 'paragraph') {
      paragraphCount++
      // Allow reading first 2 substantial paragraphs before continue reading prompt
      if (paragraphCount === 2) {
        splitIndex = i + 1
      }
    }
  }

  // If article has 3 or fewer paragraphs, show full article directly
  if (paragraphCount <= 3 || nodes.length <= 3) {
    return (
      <div className={`rich-text ${className || ''}`}>
        {serializeLexical(nodes, 'full')}
        {primaryWidgetId && (
          <div className="my-6 w-full flex justify-center items-center">
            <AdskeeperWidget widgetId={primaryWidgetId} className="!my-0" />
          </div>
        )}
      </div>
    )
  }

  const topNodes = nodes.slice(0, splitIndex)
  const remainingNodes = nodes.slice(splitIndex)

  return (
    <div className={`rich-text ${className || ''}`}>
      {serializeLexical(topNodes, 'top')}

      {primaryWidgetId && (
        <div className="my-6 w-full flex justify-center items-center">
          <AdskeeperWidget widgetId={primaryWidgetId} className="!my-0" />
        </div>
      )}

      {!isExpanded ? (
        <div className="continue-reading-gate">
          {/* Subtle fade-out over next paragraph */}
          <div className="continue-reading-fade">
            {serializeLexical(remainingNodes.slice(0, 1), 'teaser')}
            <div className="continue-reading-fade-overlay" />
          </div>

          {/* Continue Reading Button */}
          <div className="continue-reading-btn-row">
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className="continue-reading-btn"
            >
              <span>Continue Reading</span>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="continue-reading-expanded">
          {serializeLexical(remainingNodes, 'bot')}

          {secondaryWidgetId && (
            <div className="my-6 w-full flex justify-center items-center">
              <AdskeeperWidget widgetId={secondaryWidgetId} className="!my-0" />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

