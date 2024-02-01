import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface BIXV_T_INBOX_MDAttributes {
    DTEDIT?: Date;
    LUSERID?: number;
    STR_VALUE?: string;
    L_ORDER?: number;
    TXT_TEXT?: string;
    STRID: string;
    LUSERIDINSERT?: number;
    FKSTRID?: string;
    DTINSERT?: Date;
    STR_FIELD?: string;
}

@Table({
	tableName: "BIXV_T_INBOX_MD",
	timestamps: false 
})
export class BIXV_T_INBOX_MD extends Model<BIXV_T_INBOX_MDAttributes, BIXV_T_INBOX_MDAttributes> implements BIXV_T_INBOX_MDAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_VALUE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ORDER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_TEXT?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

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
    	type: DataType.STRING(255) 
    })
    	STR_FIELD?: string;

}