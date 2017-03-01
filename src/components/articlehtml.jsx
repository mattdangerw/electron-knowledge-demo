import React, { PropTypes } from 'react'
import { remote } from 'electron'
const { Engine } = remote.require('eos-knowledge-content')

const stripTags = (html) => {
  return html
    .replace(/^\s*<html>\s*<body>/, '')
    .replace(/<\/body>\s*<\/html>\s*$/, '')
}

const ArticleHTML = ({ model }) => {
  if (!model) return <div />

  const engine = Engine.get_default()
  const { data } = engine.get_domain().read_uri(model.ekn_id)
  return (
    <div className='article-html'>
      <div className='mw-body' id='bodycontents'>
        <section id='inside-content' className='section'>
          <div dangerouslySetInnerHTML={{
            __html: stripTags(data.toString())
          }} />
        </section>
      </div>
    </div>
  )
}

ArticleHTML.propTypes = {
  model: PropTypes.object
}

export default ArticleHTML
