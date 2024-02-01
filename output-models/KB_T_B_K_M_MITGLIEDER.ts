import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_B_K_M_MITGLIEDERAttributes {
    LUSERIDINSERT?: number;
    FKSTRID?: string;
    DTINSERT?: Date;
    LUSERID?: number;
    STRID: string;
    REF_BENUTZER?: number;
    DTEDIT?: Date;
}

@Table({
	tableName: "KB_T_B_K_M_MITGLIEDER",
	timestamps: false 
})
export class KB_T_B_K_M_MITGLIEDER extends Model<KB_T_B_K_M_MITGLIEDERAttributes, KB_T_B_K_M_MITGLIEDERAttributes> implements KB_T_B_K_M_MITGLIEDERAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

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
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_BENUTZER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

}