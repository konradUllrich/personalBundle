import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface T_SMAPP_SEITEAttributes {
    TXT_ZUSAMMENFASSUNG?: string;
    STR_FARBE?: string;
    STR_UEBERSCHRIFT?: string;
    FKSTRID?: string;
    STRID: string;
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
    REF_D96B27F2?: string;
    LUSERID?: number;
    L_SORTIERUNG?: number;
    DTINSERT?: Date;
}

@Table({
	tableName: "T_SMAPP_SEITE",
	timestamps: false 
})
export class T_SMAPP_SEITE extends Model<T_SMAPP_SEITEAttributes, T_SMAPP_SEITEAttributes> implements T_SMAPP_SEITEAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_ZUSAMMENFASSUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_FARBE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_UEBERSCHRIFT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

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
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_D96B27F2?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_SORTIERUNG?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

}