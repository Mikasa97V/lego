import { useState } from 'react'
import './App.css'
import { Button } from './components/Button/Button'
import { Layout } from './components/Layout/Layout'
import { WorkSpace } from './components/WorkSpace/WorkSpace'
import { Modal } from './components/Modal/Modal'


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <WorkSpace>
      <Layout 
        rightSide={
          <div>
            <Button title='Открыть модальное окно' onClick={() => setIsModalOpen(true)} />
            {isModalOpen && (
              <Modal
                title='Modal'
                buttonText='Click'
                onClose={setIsModalOpen}>
                <div>Tessfgesef</div>
              </Modal>
            )}
          </div>
        }
      />
      </WorkSpace>
    </>
  )
}

export default App
