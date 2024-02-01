import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_B_K_MITGLIEDERAttributes {
    B_BENACHRICHTIGT?: boolean;
    LUSERIDINSERT?: number;
    LUSERID?: number;
    LID: number;
    FKSTRID?: string;
    DTINSERT?: Date;
    DTEDIT?: Date;
    REF_BENUTZER?: number;
}

@Table({
	tableName: "KB_T_B_K_MITGLIEDER",
	timestamps: false 
})
export class KB_T_B_K_MITGLIEDER extends Model<KB_T_B_K_MITGLIEDERAttributes, KB_T_B_K_MITGLIEDERAttributes> implements KB_T_B_K_MITGLIEDERAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_BENACHRICHTIGT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_BENUTZER?: number;

}