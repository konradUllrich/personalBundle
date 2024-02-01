import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface T_SMAPP_ASPAttributes {
    STR_SORTIERUNG?: string;
    LUSERIDINSERT?: number;
    STRID: string;
    FKSTRID?: string;
    TXT_SEITEN?: string;
    DTEDIT?: Date;
    B_STARTSEITE?: boolean;
    LUSERID?: number;
    L_ANSPRECHPARTNER?: number;
    DTINSERT?: Date;
    STR_ANSPRECHPARTNER?: string;
}

@Table({
	tableName: "T_SMAPP_ASP",
	timestamps: false 
})
export class T_SMAPP_ASP extends Model<T_SMAPP_ASPAttributes, T_SMAPP_ASPAttributes> implements T_SMAPP_ASPAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_SORTIERUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_SEITEN?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_STARTSEITE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_ANSPRECHPARTNER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ANSPRECHPARTNER?: string;

}