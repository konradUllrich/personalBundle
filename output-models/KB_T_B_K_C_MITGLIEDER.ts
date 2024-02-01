import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_B_K_C_MITGLIEDERAttributes {
    REF_BENUTZER?: number;
    DTINSERT?: Date;
    DTEDIT?: Date;
    LID: number;
    FKSTRID?: string;
    LUSERID?: number;
    LUSERIDINSERT?: number;
}

@Table({
	tableName: "KB_T_B_K_C_MITGLIEDER",
	timestamps: false 
})
export class KB_T_B_K_C_MITGLIEDER extends Model<KB_T_B_K_C_MITGLIEDERAttributes, KB_T_B_K_C_MITGLIEDERAttributes> implements KB_T_B_K_C_MITGLIEDERAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_BENUTZER?: number;

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
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

}