import Page from '../../components/general/Page'

const Introduction = () => {
  const title = "Introduction"
  const description = `Get started with ${window.siteName}, Responsive Website Template for building responsive, mobile-first sites, with Bootstrap and a template starter page.`
  return (
    <Page
      title = {title}
      description = {description}
    >
      <div className="card">
        <div className="card-body d-flex flex-row flex-wrap-nowrap">
          <div className="card-body--img me-4">
            <img src="https://picsum.photos/73/73" alt="Avatar" />
            {/* <img src="https://loremflickr.com/73/73" alt="Avatar" /> */}
          </div>

          <div className="card-body--content">
              <h4>Front page</h4>
              <p className="mb-0">Tempor et dui quam tellus dictum et. Arcu pharetra neque, ultrices turpis hendrerit in neque interdum. Nullam vitae urna fames sagittis maecenas nunc faucibus libero tempus. Pharetra aliquam pellentesque sit malesuada diam nibh diam adipiscing ac. Nec nulla vitae vestibulum.</p>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Introduction
