import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_B_MITGLIEDERAttributes {
    FKSTRID?: string;
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
    STRID: string;
    REF_BENUTZER?: number;
    DTINSERT?: Date;
    STR_BERECHTIGUNG?: string;
    LUSERID?: number;
}

@Table({
	tableName: "KB_T_B_MITGLIEDER",
	timestamps: false 
})
export class KB_T_B_MITGLIEDER extends Model<KB_T_B_MITGLIEDERAttributes, KB_T_B_MITGLIEDERAttributes> implements KB_T_B_MITGLIEDERAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

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
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_BERECHTIGUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

}