import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from "../screens/home";

import useHomeTest from './../mock/test-home.hook'
import useHome from '../screens/home/index.hook'

import useArticleDetailModalTest from '../mock/article-detail.hook'
import useArticleDetailModal from '../screens/home/components/article-detail-modal/index.hook'

import {testAppDispatch} from '../mock/test-redux.hook'
import {useAppDispatch} from '../hooks/redux.hook'

import {Mock_Article_Detail, Mock_Article_List} from "../mock/constants";

jest.mock('../screens/home/index.hook.ts')
jest.mock('../hooks/redux.hook.ts')
jest.mock('../screens/home/components/article-detail-modal/index.hook.ts')


describe('Check Heading',  ()=>{
    beforeEach(()=>{
        useAppDispatch.mockImplementation(testAppDispatch)
        useArticleDetailModal.mockImplementation(useArticleDetailModalTest)
        useHome.mockImplementation(useHomeTest)
    })

    afterEach(()=>{
        jest.clearAllMocks()
    })

    it('Page Heading is Available', ()=>{
        render(<Home/>)
        const text = screen.getByText('Most Popular Articles')
        expect(text).toBeInTheDocument()
    })


    it('Check Card is Rendered', ()=>{
        render(<Home/>)
        const cardTitle1 = screen.getByText(Mock_Article_List[0].title)
        const cardTitle2 = screen.getByText(Mock_Article_List[1].title)
        expect(cardTitle1).toBeInTheDocument()
        expect(cardTitle2).toBeInTheDocument()
    })

    it('Check Article Modal', ()=>{
        render(<Home/>)
        const modalTitle = screen.getByText(Mock_Article_Detail.title)
        expect(modalTitle).toBeInTheDocument()
    })
})
