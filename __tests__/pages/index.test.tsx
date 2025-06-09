import { render } from '@testing-library/react'
import { useRouter } from 'next/router'
import Home from '@/pages/index'

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

const mockUseRouter = useRouter as jest.MockedFunction<typeof useRouter>

describe('Home Page', () => {
  const mockReplace = jest.fn()
  
  beforeEach(() => {
    mockUseRouter.mockReturnValue({
      replace: mockReplace,
      push: jest.fn(),
      pathname: '/',
      query: {},
      asPath: '/',
      route: '/',
      back: jest.fn(),
      forward: jest.fn(),
      beforePopState: jest.fn(),
      prefetch: jest.fn(),
      reload: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
      isLocaleDomain: false,
      isReady: true,
      defaultLocale: undefined,
      domainLocales: undefined,
      isPreview: false,
      locale: undefined,
      locales: undefined,
      basePath: '',
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    render(<Home />)
  })

  it('redirects to register page on mount', () => {
    render(<Home />)
    expect(mockReplace).toHaveBeenCalledWith('/register')
  })

  it('renders empty div', () => {
    const { container } = render(<Home />)
    expect(container.firstChild).toBeEmptyDOMElement()
  })
})